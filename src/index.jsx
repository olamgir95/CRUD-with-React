import React, { Component } from "react";
import { data } from "./mock";
import { Container, Table, Select } from "./style";

class State extends Component {
  state = {
    data,
    select: "",
    id: "",
    name: "",
    age: "",
    status: "",
    nickname: "",
    job: "",
    adress: "",
    selected: null,
  };
  render() {
    const onDelete = (id) => {
      const res = this.state.data.filter((val) => val.id !== id);

      this.setState({ data: res });
    };
    const Search = ({ target }) => {
      const res = data.filter((val) =>
        val[this.state.select]
          .toString()
          .toLowerCase()
          .includes(target.value.toLowerCase().toString())
      );
      this.setState({
        data: res,
      });
      console.log();
    };
    const onSelect = ({ target }) => {
      this.setState({ select: target.value });
    };
    const onEdit = (value) => {
      this.setState({ selected: value });
    };

    const onCancel = (value) => {
      this.setState({ selected: null });
    };

    const onSave = () => {
      let res = this.state.data.map((value) => {
        return value.id === this.state.selected.id
          ? this.state.selected
          : value;
      });
      this.setState({ data: res, selected: null });
    };

    const onChange = ({ target }) => {
      const { value, name } = target;
      this.setState({
        [name]: value,
      });
    };
    const add = ({ target }) => {
      const newuser = {
        id: data.length + 1,
        name: this.state.name,
        age: +this.state.age,
        adress: this.state.adress,
        status: this.state.status,
        job: this.state.job,
        nickname: this.state.nickname,
      };
      const result = [...this.state.data, newuser];
      if (
        this.state.name.length !== 0 &&
        this.state.age.length !== 0 &&
        this.state.status.length !== 0 &&
        this.state.job.length !== 0 &&
        this.state.adress.length !== 0 &&
        this.state.nickname.length !== 0
      )
        this.setState({
          data: result,
          name: "",
          age: "",
          status: "",
          nickname: "",
          job: "",
          adress: "",
        });
    };
    return (
      <Container>
        <h1>Webbrain Students</h1>

        <div className="inselect">
          <input placeholder="Search" onChange={Search} />

          <Select onChange={onSelect}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="adress">Adress</option>
            <option value="status">Status</option>
            <option value="job">Job</option>
            <option value="nickname">Nickname</option>
          </Select>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Adress</th>
              <th>Status</th>
              <th>Job</th>
              <th>Nickname</th>
              <th> Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data?.map((value, index) => (
              <tr key={value.id}>
                <th>{value.id}</th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            name: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.name}
                      type="text"
                    />
                  ) : (
                    value.name
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            age: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.age}
                      type="text"
                    />
                  ) : (
                    value.age
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            adress: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.adress}
                      type="text"
                    />
                  ) : (
                    value.adress
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            status: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.status}
                      type="text"
                    />
                  ) : (
                    value.status
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            job: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.job}
                      type="text"
                    />
                  ) : (
                    value.job
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          selected: {
                            ...this.state.selected,
                            nickname: target.value,
                          },
                        })
                      }
                      defaultValue={this.state.selected.nickname}
                      type="text"
                    />
                  ) : (
                    value.nickname
                  )}
                </th>
                <th>
                  {this.state.selected?.id === value.id ? (
                    <>
                      <button onClick={() => onCancel(value)}>cancel</button>
                      <button onClick={() => onSave(value)}>save</button>
                    </>
                  ) : (
                    <button onClick={() => onEdit(value)}>Edit</button>
                  )}
                </th>
                <th>
                  <button onClick={() => onDelete(value.id)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="inputs">
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={onChange}
            placeholder="Name"
          />
          <input
            type="text"
            value={this.state.age}
            name="age"
            onChange={onChange}
            placeholder="Age"
          />
          <input
            type="text"
            value={this.state.adress}
            name="adress"
            onChange={onChange}
            placeholder="Adress"
          />
          <input
            type="text"
            value={this.state.status}
            name="status"
            onChange={onChange}
            placeholder="Status"
          />
          <input
            type="text"
            value={this.state.job}
            name="job"
            onChange={onChange}
            placeholder="Job"
          />
          <input
            type="text"
            value={this.state.nickname}
            name="nickname"
            onChange={onChange}
            placeholder="Nickname"
          />
          <button onClick={add}>Add</button>
        </div>
      </Container>
    );
  }
}

export default State;
