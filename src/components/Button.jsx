import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({ children, variant, className }) => {
	return (
		<>
			<style type="text/css">
				{`
    .btn-secondary {
      background-color: transparent;
      color: #9399A2;
			border: 1px solid #9399A2;
			border-radius: 5px;
			padding: 7px 1.5rem;
			font-weight: 500;
    }

	.btn-light {
		background-color: transparent;
		color: #9BB8FF;
			  border: 1px solid #9BB8FF;
			  border-radius: 5px;
			  padding: 7px 1.5rem;
			  font-weight: 500;
	  }

    .btn-primary {
      background-color: #3871FF;
      color: white;
			border-radius: 5px;
			padding: 7px 1.5rem;
			font-weight: 500;
    }
    `}
			</style>

			<Button variant={variant} className={className}>
				{children}
			</Button>
		</>
	)
}

export default CustomButton