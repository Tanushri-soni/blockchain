pragma solidity 0.4.23;


contract DocumentStorage {


    struct Employee {
        uint id;
        string ipfshash;
    }


    mapping(uint=>Employee) public Employees;

    function DocumentStorage () public{
    addEmployee(1);
    addEmployee(2);
    }

    function addEmployee(uint id) private{
     Employees[id]=Employee(id,"");
    }


    function storeDocumentHash(uint id,string ipfshash) public {
     Employees[id].ipfshash=ipfshash;
    }

    function getEmployeeDocuments(uint id) public constant returns(uint, string) {
        return (Employees[id].id, Employees[id].ipfshash);
    }

}