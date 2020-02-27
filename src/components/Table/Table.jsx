import React, { useEffect } from 'react';
import cls from './Table.module.css';
import Service from '../../services';
import LinkContainer from '../Link/LinkContainer';
import { filters } from '../../store/filter/actions';
import Loader from '../Loader/Loader';
import { withRouter } from 'react-router-dom';


const Table = ({data, loading, dataLoaded, dataError, history}) => {

    const service = new Service();
    
    useEffect(() => {
        service.getFetchSmallData()
            .then(res => {
                dataLoaded(res)
            })
            .catch(er => {
                dataError(er);
            });
    }, []);

    if(loading) 
        return <Loader />
    
    const renderBody = data.map((d, indx) => {
        return (
            <tr key={indx} onClick={() => history.push(`${d.id}`)}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <LinkContainer name="id" filter={filters.SORT_BY_ID} />
                    <LinkContainer name="firstName" filter={filters.SORT_BY_FIRSTNAME} />
                    <LinkContainer name="lastName" filter={filters.SORT_BY_LASTNAME} />
                    <LinkContainer name="email" filter={filters.SORT_BY_EMAIL} />
                    <LinkContainer name="phone" filter={filters.SORT_BY_PHONE} />
                </tr>
            </thead>
            <tbody>
                {renderBody}
            </tbody>
        </table>
    );
}




export default withRouter(Table);


