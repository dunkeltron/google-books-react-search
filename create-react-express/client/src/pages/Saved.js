import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import {Col,Container,Row} from "../components/Grid"
import {List, ListItem} from "../components/List";
import API from "../utils/api/API"
export default class Saved extends Component {
    state = {
        books: [],
        book : "",
        title: "",
        subtitle: "",
        author: "",
        synopsis: "",
        googleId: ""

    }
    componentDidMount() {
        //this.getBooks();
      }
    
      getBooks = () => {
        API.getSavedBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "",googleId:"", subtitle:"" })
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
    
    

  render() {
    return (
              <Container fluid>
                <Row>
                  <Col size="md-12">
                    <Jumbotron>
                      <h1>(React) Google Books Search</h1>
                    </Jumbotron>
                    
                  </Col>
                  <Col size="sm-12">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => 
                            (
                                
                            <ListItem key={book.id} data = {book}></ListItem>
                            ))}
                        </List>
                    )
                     : (<h3>No Results to Display</h3>)
                    }
          </Col>
                </Row>
              </Container>
    )     
  }
    
}

