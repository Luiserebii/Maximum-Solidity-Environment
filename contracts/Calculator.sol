pragma solidity ^0.5.0;

/**
 * @title Calculator
 * @author Luiserebii <luis@serebii.io>
 *
 * @dev A simple calculator contract which performs basic arithmetic operations.
 * Documented using the natural specifications detailed here:
 * https://solidity.readthedocs.io/en/develop/natspec-format.html
 */
contract Calculator {

   
    /**
     * @dev Simple add function, returns the sum of the numbers passed.
     * 
     * @param a uint256 Number to add to.
     * @param b uint256 Number to add.
     * 
     * @return uint256 The sum of a and b.
     */
    function add(uint256 a, uint256 b) public returns (uint256) {
        uint256 c = a + b;
        emit Addition(a, b, c);
        return c;
    }

    /**
     * @dev Simple subtraction function, returns the difference of the numbers passed.
     * 
     * @param a uint256 Number to subtract from.
     * @param b uint256 Number to subtract.
     * 
     * @return uint256 The difference of a and b.
     */
    function sub(uint256 a, uint256 b) public returns (uint256){
        uint256 c = a - b;
        emit Subtraction(a, b, c);
        return c;
    }

    /**
     * @dev Simple multiplication function, returns the product of the numbers passed.
     * 
     * @param a uint256 Number to treat as a factor.
     * @param b uint256 Number to treat as a factor.
     * 
     * @return uint256 The product of a and b.
     */
    function mul(uint256 a, uint256 b) public returns (uint256){
        uint256 c = a * b;
        emit Multiplication(a, b, c);
        return c;
    }

    /**
     * @dev Simple division function, returns the quotient of the numbers passed.
     * 
     * @param a uint256 Number to treat as the dividend.
     * @param b uint256 Number to treat as the divisor.
     * 
     * @return uint256 The quotient of a ÷ b.
     */
    function div(uint256 a, uint256 b) public returns (uint256){
        uint256 c = a / b;
        emit Division(a, b, c);
        return c;
    }
    

    event Addition(uint256 _a, uint256 _b, uint256 _sum);
    event Subtraction(uint256 _a, uint256 _b, uint256 _difference);
    event Multiplication(uint256 _a, uint256 _b, uint256 _product);
    event Division(uint256 _a, uint256 _b, uint256 _quotient);

}
