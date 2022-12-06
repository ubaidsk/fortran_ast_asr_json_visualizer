const code_example1 = `program expr2
    implicit none

    integer :: x

    x = (2+3)*5
    print *, x

end program`;

const code_example2 = `program expr_11
! Test parantheses in expressions with type casts (#1043)
    real*8 x

    x=(2.0*x+1.0)/(x*(x+1))
end program
`;

const code_example3 = `program functions_02
implicit none
integer :: i
real :: f, g
i = 1
f = 3.5

g = mysum(i, f)

if (myabs(g-4.5) > 1e-5) error stop

contains

    real function mysum(a, b) result(c)
    integer, intent(in) :: a
    real, intent(in) :: b
    c = a + b
    end function

    real function myabs(a) result(c)
    real, intent(in) :: a
    if (a >= 0) then
        c = a
    else
        c = -a
    end if
    end function

end program`

const code_examples = [code_example1, code_example2, code_example3]
export default code_examples;
