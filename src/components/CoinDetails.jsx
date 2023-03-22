import { Box, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";

function CoinDetails() {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id]);

  if (error) return <ErrorComponent message={"Error while fetching coin"} />;

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            5:42
          </Box>

          {/* button */}

          <RadioGroup value={currency} onChange={setCurrency}>
          <HStack>
            <Radio value={"inr"}>₹ INR</Radio>
            <Radio value={"usd"}>$ USD</Radio>
            <Radio value={"eur"}>€ EURO</Radio>
          </HStack>
        </RadioGroup>
        </>
      )}
    </Container>
  );
}

export default CoinDetails;
