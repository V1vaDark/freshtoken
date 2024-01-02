import { useState } from "react";
import Login from "./login";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import React from "react";

export default function Form() {
    const [checked, setChecked] = useState(false);

    return (
        <div
            style={{
                border: "1px solid green",
                boxShadow: "0px 0px 50px rgb(26 173 46 / 15%)",
            }}
            className="rounded-lg mt-3 text-white bg-indigo-500 p-5 w-[90%] m-auto lg:w-[800px] md:w-[800px]"
            align="center"
        >
            {checked ? (
                <>
                </>
            ) : (
                <>
                    <div className="text-3xl">
                        <Chip
                            avatar={<Avatar>C</Avatar>}
                            color="primary"
                            label="CHANGE PASSWORD"
                        />
                    </div>
                </>
            )}

             <Login setChecked={setChecked} />

             <br></br>
             We will send you an email to change your password. Please be sure that you have access to your email at the moment.
             <br></br>
             *You need to put the email address that is linked to your Fresh Token account.
        </div>
    );
}