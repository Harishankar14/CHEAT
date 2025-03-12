// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract HealthRecord{
    mapping(address=>string) private records;
    mapping(address=>mapping(address=>uint256)) private accessList;

    // store the encrypted record
    function storeRecord(string memory _encryptedData) public{
        records[msg.sender]=_encryptedData;
    }

    // grant access to provider with time limit 

    function grantAcess(address _provider,uint256,uint256 _duration) public{
        accessList[msg.sender][_provider]=block.timestamp+_duration;
    }

    // check if provider has access and return the data 
    function getRecord(address _patient) public view returns (string memory) {
        require(accessList[_patient][msg.sender] > block.timestamp, "Access denied or expired");
        return records[_patient];
    }

}
