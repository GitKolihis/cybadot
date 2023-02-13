import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../api/reducers/UserReducer";

const Index = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        console.log('List of Users: ', users)
    }, [users])

    return (
        <div>
            <h1>Header </h1>
        </div>
    )
}

export default Index