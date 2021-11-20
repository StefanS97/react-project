import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import CustomTitle from "../UI/CustomTitle";
import qas from "./qas";

const Help = () => {
  return (
    <>
      <CustomTitle title="Need help?" />
      <div className="help">
        {qas.map((item, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <h4>{item.question}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Help;
