import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Select from "../../components/Select";
import {useMutation, useQuery} from "@apollo/client";
import {GET_HIVE} from "../../graphql/queries/hive-queries";
import {DELETE_HIVE, SET_HIVE} from "../../graphql/mutations/hive-mutations";

function Hive(props) {

    const typeOptions = [
        {value:"Vertical"},
        {value:"Horizontal"},
        {value:"Queen bee rearing"},
        {value:"Nucleus"}
    ]

    const queenOptions = [
        {value:"Carniolan"},
        {value:"Buckfast"},
        {value:"Italian"},
        {value:"Caucasian"}
    ]

    const {id} = useParams()

    const [hive, setHive] = useState({
        _id: null,
        type: "",
        queen: "",
        performance: 0,
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handlePerformanceChange = (e) => {
        setHive(prev => ({...prev, performance: e.target.value}))
    }

    const handleTypeChange = (e) => {
        setHive(prev => ({...prev, type: e.target.value}))
    }

    const handleQueenChange = (e) => {
        setHive(prev => ({...prev, queen: e.target.value}))
    }

    const errorHandler = (error) => {
        setError(error.networkError.result.message)
    }

    const {loading} = useQuery(GET_HIVE, {
        variables:{
            id: id
        },
        onError: errorHandler,
        onCompleted: data => {
            setHive(data.getHive)
        }
    })

    const [setHiveMutation] = useMutation(SET_HIVE, {
        onError: errorHandler,
        onCompleted: () => {
            navigate(-1)
        }
    })

    const [deleteHive] = useMutation(DELETE_HIVE, {
        onError: errorHandler,
        onCompleted: () => {
            navigate(-1)
        }
    })

    const handleCancelClick = (e) => {
        e.preventDefault()

        navigate(-1)
    }

    const handleSaveClick = (e) =>{
        e.preventDefault()

        setHiveMutation({
            variables:{
                input: {_id: hive._id, type: hive.type, queen: hive.queen,
                    performance: parseInt(hive.performance)}
            }
        })
    }

    const handleDeleteClick = async (e) => {
        e.preventDefault()

        deleteHive({
            variables:{
                id: id
            }
        })
    }

    return (
        <div>
            <div className="container bg-dark p-5 d-flex flex-column align-items-center
            rounded-5 border border-secondary">

                <span className="text-warning h2 mb-4">Number #{hive.number}</span>

                <div className="input-group mb-3 row-cols-2">
                    <div className="input-group-text bg-dark border-warning col-1
                    d-flex justify-content-center">
                        <img style={{height: "5vh", width:"auto"}}
                             src="/images/beeFrame.png"/>
                    </div>
                    <div className="form-floating col">
                        <Select
                            onChange={handleTypeChange}
                            options={typeOptions}
                            value={hive.type}
                        />
                        <label className="form-label">Hive type</label>
                    </div>
                </div>


                <div className="mb-3 input-group row-cols-2">
                    <div className="input-group-text bg-dark border-warning col-1
                    d-flex justify-content-center">
                        <img style={{height: "5vh", width:"auto"}}
                             src="/images/beeQueen.png"/>
                    </div>
                    <div className="form-floating col">
                        <Select
                            onChange={handleQueenChange}
                            options={queenOptions}
                            value={hive.queen}
                            other
                        />
                        <label className="form-label">Queen</label>
                    </div>
                </div>

                <div className="input-group row">
                    <div className="input-group-text bg-dark border-warning col-1
                    d-flex justify-content-center">
                        <img style={{height: "5vh", width:"auto"}}
                             src="/images/swarmOfBees.png"/>
                    </div>

                    <div className="form-control bg-dark border-warning col">
                        <label className="form-label text-warning border-warning">
                            Performance: {hive.performance}%</label>
                        <input value={hive.performance} onChange={handlePerformanceChange} type="range"
                               className=" form-range mb-2" min="0" max="100" />
                    </div>

                </div>

                <div className="input-group mt-5 row-cols-2 mb-2">
                    <button onClick={handleCancelClick} className="btn btn-outline-secondary">Cancel</button>
                    <button onClick={handleSaveClick} className="btn btn-warning">Save</button>
                </div>
                <button onClick={handleDeleteClick} className="btn btn-outline-danger w-100">Delete</button>
                <div className="spinner-grow text-warning mt-4" role="status"
                     style={{visibility: !loading?"hidden":"visible"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                {error &&
                    <div className="border border-danger border rounded-4 p-2 px-4 mt-2">
                        <span className="text-danger text-center h3">{error.message}</span>
                    </div>}
            </div>
        </div>
    );
}

export default Hive;