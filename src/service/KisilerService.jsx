import axiosInstance from "./AxiosInstance";
const kisiEkle = (kisi) => {
  return axiosInstance.post("/ekle", kisi);
};
const tumKisileriGetir = () => {
  return axiosInstance.get("/");
};
const KisilerServis = {
  kisiEkle,
};
export default KisilerServis;
