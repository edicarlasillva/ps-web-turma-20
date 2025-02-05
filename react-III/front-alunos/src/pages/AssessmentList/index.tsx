import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteAssessment } from "../../store/slices/assessmentsSlice";
import { ModalCreateAssessment } from "../../components/ModalCreateAssessment";
import { toggleModal } from "../../store/slices/modalSlice";

export function AssessmentList() {
  const dispatch = useAppDispatch();
  const assessments = useAppSelector((state) => state.assessments);

  function handleDeleteAssessment(id: string) {
    dispatch(deleteAssessment(id));
  }

  function handleAddAssessment() {
    dispatch(toggleModal());
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4">Avaliações</Typography>

      <Button variant="contained" onClick={handleAddAssessment}>
        Criar avaliação
      </Button>

      <Grid container spacing={2}>
        {assessments.map((assesment) => (
          <Grid key={assesment.id} size={{ xs: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">{assesment.discipline}</Typography>
                <Typography variant="body1">{assesment.grade}</Typography>
              </CardContent>

              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteAssessment(assesment.id)}
                >
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ModalCreateAssessment />
    </Box>
  );
}
