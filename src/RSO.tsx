import { Component } from "solid-js";
import RsoForm from "./RsoForm";
import LeaveRso from "./LeaveRso";
import JoinRso from "./JoinRso";

const RSO : Component = () => {
    return (
        <div class="bg-white p-10">
            <h1 class="text-xl mx-auto p-2 border-b-4 text-center">RSO</h1>
        <RsoForm />
        <JoinRso />
        <LeaveRso />
        </div>
    );
}

export default RSO;
