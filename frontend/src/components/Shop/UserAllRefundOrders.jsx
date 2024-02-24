import React, { useState } from "react";
import {
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const UserAllRefundOrders = () => {
    const { user } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.order);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllOrdersOfUser(user._id));
    }, []);
  
    const eligibleOrders =
      orders && orders.filter((item) => item.status === "Processing refund"|| item.status === "Refund Success");
  
    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
  
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
      {
        field: " ",
        flex: 1,
        minWidth: 150,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <AiOutlineArrowRight size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ];
  
    const row = [];
  
    eligibleOrders &&
      eligibleOrders.forEach((item) => {
        row.push({
          id: item._id,
          itemsQty: item.cart.length,
          total: "IN₹ " + item.totalPrice,
          status: item.status,
        });
      });
    return (
      <div className="w-full mx-8 pt-0 mt-0 ml-0 mr-0 bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    );
  };
  
export default UserAllRefundOrders;