import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBTypography,
    } from "mdb-react-ui-kit";

export default function CheckOut() {
  return (
    <div>
        <MDBCard className="mb-4">
          <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Summary
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </MDBListGroupItem>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>$53.98</strong>
                </span>
              </MDBListGroupItem>
            </MDBListGroup>

            <MDBBtn block size="lg">
              Go to checkout
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
    </div>
  )
}
