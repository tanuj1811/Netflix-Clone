import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../context/firebase";

const useAuthListener = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    )

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged( (authUser) => {
            if(authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        })

        return () => listener(); // this is cleaning the listener
    }, [firebase]);

    return [ user ];
}

export default useAuthListener;

