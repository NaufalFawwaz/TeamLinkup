import { initializeApp } from "@firebase/app";
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithPhoneNumber,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence
} from 'firebase/auth'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import {
    addDoc,
    collection,
    deleteDoc,
    doc, getDoc,
    getDocs,
    getFirestore, limit,
    orderBy,
    query,
    serverTimestamp,
    setDoc, startAfter, where,
    updateDoc
} from 'firebase/firestore'


const fbApp = initializeApp(
    {
        apiKey: import.meta.env.VITE_APIKEY,
        authDomain: import.meta.env.VITE_AUTHDOMAIN,
        projectId: import.meta.env.VITE_PROJECTID,
        storageBucket: import.meta.env.VITE_STORAGEBUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
        appId: import.meta.env.VITE_APPID,
    }
)

const auth = getAuth(fbApp);
setPersistence(auth, browserSessionPersistence);

export class Repository {
    auth = auth
    storage = getStorage(fbApp)
    firestore = getFirestore(fbApp)

    userLogin(email, password, onSuccess, onFailed) {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((result) => {
            const uid = result.user.uid
            localStorage.setItem('uid', uid)
            onSuccess()
        }).catch((err) => {
            console.log(err)
            onFailed(err)
        })
    }

    async userLoginWithGoogle(onSuccess, onFailed) {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(this.auth, provider);
            const uid = result.user.uid;
            console.log(uid)
            localStorage.setItem('uid', uid);

            // Extract relevant data from Google auth result
            const { displayName, photoURL, email } = result.user;

            // Check if the user already exists in the 'users' collection
            const userQuery = query(collection(this.firestore, 'users'), where('uid', '==', uid));

            const userQuerySnapshot = await getDocs(userQuery);

            if (userQuerySnapshot.size === 0) {
                // User does not exist, create a new document
                const userDocRef = await addDoc(collection(this.firestore, 'users'), {
                    uid,
                    nama: displayName || '', // Use display name from Google or an empty string
                    profile: photoURL || '', // Use photo URL from Google or an empty string
                    email: email || '', // Use email from Google or an empty string
                    // Add other fields with default values if needed
                    background: "/src/assets/otherbg.png",
                    deskripsi: "",
                    fakultas: "",
                    idLine: "",
                    jurusan: "",
                    noTelp: "",
                    prestasi: "",
                    skill: "",
                    universitas: "",
                    timestamp: serverTimestamp(), // Add a timestamp for when the document is created
                });

                const userId = userDocRef.id;
                console.log(userId)
                onSuccess(result.user);
            } else {
                // User already exists, you can handle this case accordingly
                console.log('User already exists');
                onSuccess(result.user);
            }
        } catch (error) {
            onFailed(error);
        }
    }

    userLogout(onSuccess, onFailed) {
        signOut(
            this.auth
        ).then(() => {
            onSuccess()
        }).catch((err) => {
            onFailed(err)
        })
    }

    async createUser(userData, onSuccess, onFailed) {
        try {
            const eventCollectionRef = collection(this.firestore, 'userList');
            const docRef = await addDoc(eventCollectionRef, userData);

            const eventId = docRef.id;

            onSuccess(eventId);
        } catch (error) {
            console.error('Error creating user:', error);
            onFailed(error);
        }
    }

    async createMentor(mentorData, onSuccess, onFailed) {
        try {
            const eventCollectionRef = collection(this.firestore, 'mentorList');
            const docRef = await addDoc(eventCollectionRef, mentorData);

            const eventId = docRef.id;

            onSuccess(eventId);
        } catch (error) {
            console.error('Error creating user:', error);
            onFailed(error);
        }
    }

    getUser(onSuccess, onFailed) {
        getDocs(
            query(
                collection(this.firestore, 'userList'),
            )
        ).then((res) => {
            onSuccess(
                res.docs.map((res2) => {
                    const userItem = {
                        id: res2.id,
                        name: res2.data()['name'],
                        universitas: res2.data()['universitas'],
                        skill: res2.data()['skill'],
                        status: res2.data()['status'],
                    };

                    return userItem;
                })
            );
        }).catch((err) => {
            onFailed(err);
        });
    }

    getMentor(onSuccess, onFailed) {
        getDocs(
            query(
                collection(this.firestore, 'mentorList'),
            )
        ).then((res) => {
            onSuccess(
                res.docs.map((res2) => {
                    const userItem = {
                        id: res2.id,
                        nama: res2.data()['nama'],
                        universitas: res2.data()['universitas'],
                        major: res2.data()['major'],
                        status: res2.data()['status'],
                    };

                    return userItem;
                })
            );
        }).catch((err) => {
            onFailed(err);
        });
    }

    async getMentorDataById(mentorId, onSuccess, onFailed) {
        try {
            const mentorDocRef = doc(this.firestore, 'mentorList', mentorId);
            const docSnap = await getDoc(mentorDocRef);

            if (docSnap.exists()) {
                const eventData = {

                    id: docSnap.id,
                    nama: docSnap.data()['nama'],
                    universitas: docSnap.data()['universitas'],
                    fakultas: docSnap.data()['fakultas'],
                    status: docSnap.data()['status'],
                    major: docSnap.data()['major'],
                    minor: docSnap.data()['minor'],
                };
                onSuccess(eventData);
            } else {
                console.log('No such event document!');
                onFailed(new Error('Event not found'));
            }
        } catch (error) {
            console.error('Error getting event data:', error);
            onFailed(error);
        }
    }

    async updateUserProfile(uid, userData) {
        const userDocRef = doc(this.firestore, 'users', uid);

        try {
            await setDoc(userDocRef, {
                profile: userData.profile,
                background: userData.background,
                nama: userData.nama,
                noTelp: userData.noTelp,
                universitas: userData.universitas,
                idLine: userData.idLine,
                fakultas: userData.fakultas,
                prestasi: userData.prestasi,
                jurusan: userData.jurusan,
                skill: userData.skill,
                deskripsi: userData.deskripsi,
            });

            return true;
        } catch (error) {
            console.error('Error updating user profile:', error);
            return false;
        }
    }

    async getUserData(uid) {
        try {
            const userDocRef = doc(this.firestore, 'users', uid);
            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log('No such document!');
                return null;
            }
        } catch (error) {
            console.error('Error getting user data:', error);
            return null;
        }
    }

    getTopEventItems(onSuccess, onFailed) {
        getDocs(
            query(
                collection(this.firestore, 'event'),
                // orderBy('start_date', 'desc'),
            )
        ).then((res) => {
            onSuccess(
                res.docs.map((res2) => {
                    const eventItem = {
                        id: res2.id,
                        title: res2.data()['title'],
                        category: res2.data()['category'],
                    };

                    return eventItem;
                })
            );
        }).catch((err) => {
            onFailed(err);
        });
    }

    async getEventDataById(eventId, onSuccess, onFailed) {
        try {
            const eventDocRef = doc(this.firestore, 'event', eventId);
            const docSnap = await getDoc(eventDocRef);

            if (docSnap.exists()) {
                const eventData = {
                    id: docSnap.id,
                    title: docSnap.data()['title'],
                    category: docSnap.data()['category'],
                    description: docSnap.data()['description'],
                    fee: docSnap.data()['fee'],
                    location: docSnap.data()['location'],
                    main: docSnap.data()['main'],
                    date: docSnap.data()['date'],
                };
                onSuccess(eventData);
            } else {
                console.log('No such event document!');
                onFailed(new Error('Event not found'));
            }
        } catch (error) {
            console.error('Error getting event data:', error);
            onFailed(error);
        }
    }
}