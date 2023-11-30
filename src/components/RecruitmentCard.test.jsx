import { render, screen } from "@testing-library/react";
import RecruitmentCard from "./RecruitmentCard";
import { BrowserRouter } from "react-router-dom";

const testData = {
    name: "John Doe",
    university: "University of Testing",
    role: "Tester",
    status: "Ready to Join",
    recruitment: {
        team: "Team A",
        competition: "Testing Competition",
        category: "Testing Category",
        message: "This is a test recruitment message.",
    },
};

it("renders correctly", () => {
    render(
        <BrowserRouter>
            <RecruitmentCard data={testData} />
        </BrowserRouter>
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("University of Testing")).toBeInTheDocument();
    expect(screen.getByText("Tester")).toBeInTheDocument();
    expect(screen.getByText("Ready to Join")).toBeInTheDocument();
    expect(screen.getByText("Team A")).toBeInTheDocument();
    expect(screen.getByText("Testing Competition")).toBeInTheDocument();
    expect(screen.getByText("Testing Category")).toBeInTheDocument();
    expect(screen.getByText("This is a test recruitment message.")).toBeInTheDocument();
});
