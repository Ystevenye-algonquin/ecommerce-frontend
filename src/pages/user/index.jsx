import React, { Component } from "react";
import UserLayout from "../../components/user-layout";
import axios from "axios";

import { Table, Divider, Modal,Popconfirm, message } from "antd";

const URL = "http://localhost:8080";

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }


export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            visible: false,
            currentEditUser:{}
        };
      }


    handleDelete(index){
        message.success('Click on Yes');
        console.log('handleDelete ',index);
    }

    handleEdit(index){
        let currentUser=this.state.data[index];
        this.setState({
            visible:true,
            currentEditUser:currentUser
        })
        console.log('handleEdit',index);
    }
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        console.log('handleOk currentUser',this.state.currentEditUser);
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false
        });
      };

  componentDidMount() {
    axios
      .get(URL + "/users")
      .then((response)=> {
        this.setState({
            data:response.data
        })
        console.log(response);
      })
      .catch(function(error) {
        // handle
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {

    const columns = [
        {
          title: "User ID",
          dataIndex: "userId",
          key: "userId",
          render: text => <a>{text}</a>
        },
        {
          title: "Username",
          dataIndex: "userName",
          key: "userName"
        },
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName"
        },
        {
          title: "Last Name",
          key: "lastName",
          dataIndex: "lastName"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
        },
        {
          title: "Action",
          key: "action",
          render: (text, record,index) => (
            <span>
              <a onClick={this.handleEdit.bind(this,index)}>Edit</a>
              <Divider type="vertical" />
              <Popconfirm
                    title="Are you sure delete this user?"
                    onConfirm={this.handleDelete.bind(this,record)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete</a>
                </Popconfirm>
            </span>
          )
        }
      ];

    return (
      <UserLayout>
            <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.currentEditUser!=null && this.state.currentEditUser.userName}</p>
          <p>{this.state.currentEditUser!=null && this.state.currentEditUser.firstName}</p>
          <p>{this.state.currentEditUser!=null && this.state.currentEditUser.lastName}</p>
        </Modal>
        <div>
          <Table columns={columns} dataSource={this.state.data} />
        </div>
      </UserLayout>
    );
  }
}
