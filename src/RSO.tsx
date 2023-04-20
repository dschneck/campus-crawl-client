import { Component } from "solid-js";
import RsoForm from "./RsoForm";

const RSO : Component = () => {
    return (
        <div class="bg-white p-10">
            <h1 class="text-xl mx-auto p-2 border-b-4 text-center">RSO</h1>
        <RsoForm />
        </div>
    );
}

export default RSO;
