import React, { useState, useEffect } from "react";

const AddedImages = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.checkedImages.map((resultsFromServer, index) => {
                        return (
                            <tr key={index}>
                                <td>{resultsFromServer.id}</td>
                                <td>{resultsFromServer?.breeds[0]?.name}</td>
                                <td><img src={resultsFromServer.breeds[0].url} alt="" /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default AddedImages;