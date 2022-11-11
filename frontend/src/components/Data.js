export default function Data(props)
{
    return(
        <div className="container">
            <div className="row my-2">
                <div className="col-10">
                    <h3 className="">Number of active nodes:</h3>
                </div>
                <div className="col-2">
                    <h3 className="">{props.active}</h3>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-10">
                    <h3 className="">Number of inactive nodes:</h3>
                </div>
                <div className="col-2">
                    <h3 className="">{props.inactive}</h3>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-10">
                    <h3 className="">Suspicious activities detected:</h3>
                </div>
                <div className="col-2">
                    <h3 className="">{props.sus}</h3>
                </div>
            </div>
        </div>
    )
}