import React, {useEffect, useState} from "react";

function Profile(props) {

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        loadUserProfile()
    })

    function loadUserProfile() {
        props.auth.getProfile((profile, error) => {
            setProfile(profile)
            setError(error)
        })
    }

    return (
        <>
            <h1>Profile</h1>
            {profile && <p>{profile.nickname}</p>}
            {profile && <img src={profile.picture} style={{maxWidth: 50, maxHeight: 50}}/>}
            {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
        </>
    )
}

export default Profile