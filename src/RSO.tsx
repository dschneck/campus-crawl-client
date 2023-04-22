import { Component } from "solid-js";
import RsoForm from "./RsoForm";
import LeaveRso from "./LeaveRso";
import JoinRso from "./JoinRso";

const RSO : Component = () => {
    return (
        <div class="bg-white mx-auto p-12">
            <h1 class=" text-chestnut text-xl mx-auto p-4  text-center">RSO</h1>
        <div class="flex">
            <RsoForm />
            <div>
                <JoinRso />
                <LeaveRso />
            </div>
            </div>
        </div>
    );
}

export default RSO;
