import React from 'react';
import {searchPosts} from '../actions';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
    

    state = {
        searchTerm: '',
        sort: 'date'
    }
    
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    
    submitHandler(e){
        e.preventDefault();
        this.props.searchPosts({sort: this.state.sort, searchTerm: this.state.searchTerm, page: 1});
    }
    
    render() {
        return (
            <div className = 'container'>
                <nav></nav>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        sort: state.sort,
        page: state.page
    }    
}

export default connect(mapStateToProps, {searchPosts})(SearchForm);




//  <form onSubmit = {this.submitHandler.bind(this)} className = 'box'>
//                     <div className = 'm-b-1'>
//                         <label>Search Term</label>
//                         <input onChange = {this.inputHandler.bind(this)} value = {this.state.searchTerm} className = 'input-block' name = 'searchTerm' />
//                     </div>
                    
//                     <div className = 'm-b-1'>
//                         <label>Sort By</label>
                        
//                         <div className = 'm-t-1 small-flex-start'>
//                             <input onChange = {this.inputHandler.bind(this)} type = 'radio' className = 'radio' name = 'sort' value = 'date' /><label className = 'font-light'>Date</label>
//                         </div>
                        
//                         <div className = 'm-t-1 small-flex-start'>
//                             <input onChange = {this.inputHandler.bind(this)}  type = 'radio' className = 'radio' name = 'sort'  value = 'views'/><label className = 'font-light'>Views</label>
//                         </div>
                            
//                         <div className = 'm-t-1 small-flex-start'>
//                             <input onChange = {this.inputHandler.bind(this)}  type = 'radio' className = 'radio' name = 'sort' value = 'likes' /><label className = 'font-light'>Likes</label>
//                         </div>
                        
//                     </div>
                    
//                     <button type = 'submit' className = 'btn btn-block btn-primary'>Search</button>
//                 </form>