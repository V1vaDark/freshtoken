import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import React from "react";

export default function Form() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div
            style={{
                border: "1px solid green",
                boxShadow: "0px 0px 50px rgb(26 173 46 / 15%)",
            }}
            className="rounded-lg mt-3 text-white bg-indigo-500 p-5 w-[90%] m-auto lg:w-[800px] md:w-[800px] bg-darkzero mb-8"
            align="center"
        >
            {checked ? (
                <>
                    <div className="text-3xl">
                    <Chip
                        avatar={<Avatar style={{ backgroundColor: 'darkgreen', color: 'white' }}>R</Avatar>}
                        color="success"
                        label="REGISTER YOUR ACCOUNT"
                    />
                    </div>
                </>
            ) : (
                <>
                <div className="text-3xl">
                    <Chip
                    avatar={<Avatar>L</Avatar>}
                    color="primary"
                    label="LOGIN TO YOUR ACCOUNT"
                    />
                </div>
                </>
            )}

            <div className="p-5 w-full">
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                />
            </div>
            {checked ? <Signup setChecked={setChecked}/> : <Login setChecked={setChecked}/>}
        </div>
    );
}