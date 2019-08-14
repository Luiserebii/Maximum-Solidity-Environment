pragma solidity ^0.4.25;

contract Calculator {

    
    function add(uint256 a, uint256 b) public {
        uint256 c = a + b;
        emit Addition(a, b, c);
    }

    function sub(uint256 a, uint256 b) public {
        uint256 c = a - b;
        emit Subtraction(a, b, c);
    }

    function mul(uint256 a, uint256 b) public {
        uint256 c = a * b;
        emit Multiplication(a, b, c);
    }

    function div(uint256 a, uint256 b) public {
        uint256 c = a / b;
        emit Division(a, b, c);
    }
    

    event Addition(uint256 _a, uint256 _b, uint256 _sum);
    event Subtraction(uint256 _a, uint256 _b, uint256 _difference);
    event Multiplication(uint256 _a, uint256 _b, uint256 _product);
    event Division(uint256 _a, uint256 _b, uint256 _quotient);

}
