import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../api/reducers/UserReducer";

const Index = () => {
    const dispatch = useDispatch()
    const { userList } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        console.log('List of Users: ', userList)
    }, [userList])


    const deleteUser = (item) => {

    }

    return (
        <div>
            <h1>Header </h1>
            {userList.map((user, index) => (
                <div key={index}>
                    <div>
                        <div className="col">
                            <p>{'Name: '}</p>
                        </div>
                        <div className="col">
                            <p>{user.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index