import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Chart from "./Chart";

const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  Alignment: {
    alignItems: "left",
    justifyContent: "left",
    textAlign: "left",
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 1),
  },
  card: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function UserProfile() {
  const [interest, setInterest] = useState();
  const [amount, setAmount] = useState();
  const [age, setAge] = useState();
  const [retirement, setRetirement] = useState();
  const [savings, setSavings] = useState();
  const [final, setFinal] = useState();
  const classes = useStyles();
  const calculate = () => {

    const result = (interest/12*(amount-savings*(1+interest/12)**((retirement-age)*12)))/((1+interest/12)**((retirement-age)*12)-1)
    // (r/12*(1000000-I*(1+r/12)**(t*12)))/((1+r/12)**(t*12)-1)
    const test = (amount-savings)
    console.log(test)

    setFinal(result)
  };
  return (
    <div className="root">
      <GridContainer>
        <GridItem xs={12} sm={12} md={15}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Current Age?"
                    id="username"
                    change={(e) => setAge(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Current Savings?"
                    id="email-address"
                    change={(e) => setSavings(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Ideal age of retirement?"
                    id="last-name"
                    change={(e) => setRetirement(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="How much do you want?"
                    id="city"
                    change={(e) => setAmount(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Annual Interest rate?"
                    id="country"
                    change={(e) => setInterest(e.target.value/100)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                  <Button color="primary" onClick={calculate}>Calculate</Button>
                  <Typography>${final}</Typography>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    <GridContainer>
      <Chart interest={interest} savings={savings} contributions={result} retirement={retirement}/>
    </GridContainer>
    </div>


  );
}