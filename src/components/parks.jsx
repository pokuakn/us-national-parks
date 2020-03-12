import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import { getParks } from "./../services/parkData";

import PopUp from "./popUp";
import Pagination from "./pagination";

class Parks extends Component {
  state = {
    parks: [],
    pageSize: 10,
    currentPage: 1,
    isOpen: false,
    selectedPark: ""
  };

  componentDidMount() {
    this.setState({ parks: getParks() });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleNext = totalPages => {
    const { currentPage } = this.state;
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    this.setState({ currentPage: nextPage });
  };

  handlePrevious = () => {
    const prevPage =
      this.state.currentPage > 1 ? this.state.currentPage - 1 : 1;
    this.setState({ currentPage: prevPage });
  };

  getPagedData = () => {
    const { pageSize, currentPage, parks: allParks } = this.state;
    const parks = paginate(allParks, currentPage, pageSize);
    return { totalCount: allParks.length, data: parks };
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { totalCount, data: parks } = this.getPagedData();

    return (
      <div>
        <Pagination
          itemsCount={totalCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          onNextPage={this.handleNext}
          onPrevPage={this.handlePrevious}
        />

        <table className="table table-dark">
          <thead>
            <tr>
              <th width="20%">Park Name</th>
              <th>Park Information</th>
            </tr>
          </thead>
          <tbody>
            {parks.map(park => (
              <tr key={park.Name}>
                <td>{park.Name}</td>
                <td>
                  <p>{park.Description}</p>
                  <div className="row">
                    <div className="col">
                      <strong>Location:</strong> {park.Location} <br />
                      <strong>Established:</strong> {park.Established} <br />
                      <strong>Area:</strong> {park.Area} <br />
                      <strong>Recreation visitors:</strong>{" "}
                      {park["Recreation visitors"]}
                    </div>
                    <div className="col">
                      <img
                        key={park.Image}
                        src={park.Thumbnail}
                        onClick={() =>
                          this.setState({
                            isOpen: true,
                            selectedPark: park.Name
                          })
                        }
                        alt={park.Name}
                      />
                      <PopUp
                        isOpen={this.state.isOpen}
                        selectedPark={this.state.selectedPark}
                        onClose={() =>
                          this.setState({ isOpen: false, selectedPark: "" })
                        }
                        data={park}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={totalCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          onNextPage={this.handleNext}
          onPrevPage={this.handlePrevious}
        />
      </div>
    );
  }
}

export default Parks;
