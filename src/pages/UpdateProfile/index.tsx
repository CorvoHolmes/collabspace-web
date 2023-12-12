import ProfileCard from "../../components/ProfileCard";
import LayoutDefault from "../../layouts/Default";
import Button from "../../components/Button";
import InputArea from "../../components/InputArea";
import { useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import {
  Container,
  Forms,
  Form,
  Groups,
  Group,
  InputGroup,
  Label,
  Input,
  Select,
} from "./styles";
import { UpdatePassword, UupdateUser } from "../../services/users";
import { useAuthentication } from "../../contexts/Authentication";
import { maskCep, maskTelephone } from "../../utils/mask";
import { getAddress } from "../../services/viacep";
import { createAddress, updateAddress } from "../../services/address";

const provinces = [
  { key: "AC", value: "Acre" },
  { key: "AL", value: "Alagoas" },
  { key: "AP", value: "Amapá" },
  { key: "AM", value: "Amazonas" },
  { key: "BA", value: "Bahia" },
  { key: "CE", value: "Ceará" },
  { key: "DF", value: "Distrito Federal" },
  { key: "ES", value: "Espírito Santo" },
  { key: "GO", value: "Goiás" },
  { key: "MA", value: "Maranhão" },
  { key: "MT", value: "Mato Grosso" },
  { key: "MS", value: "Mato Grosso do Sul" },
  { key: "MG", value: "Minas Gerais" },
  { key: "PA", value: "Pará" },
  { key: "PB", value: "Paraíba" },
  { key: "PR", value: "Paraná" },
  { key: "PE", value: "Pernambuco" },
  { key: "PI", value: "Piauí" },
  { key: "RJ", value: "Rio de Janeiro" },
  { key: "RN", value: "Rio Grande do Norte" },
  { key: "RS", value: "Rio Grande do Sul" },
  { key: "RO", value: "Rondônia" },
  { key: "RR", value: "Roraima" },
  { key: "SC", value: "Santa Catarina" },
  { key: "SP", value: "São Paulo" },
  { key: "SE", value: "Sergipe" },
  { key: "TO", value: "Tocantins" },
];

const UpdateProfile: React.FC = () => {
  const { user, handleUser, handleAddress } = useAuthentication();

  const [name, setName] = useState(user?.name || "");
  const [telephone, setTelephone] = useState(
    maskTelephone(user?.telephone || ""),
  );
  const [birthDate, setBirtdate] = useState(user?.birthDate || "");
  const [bio, setBio] = useState(user?.bio || "");

  const [country, setCountry] = useState(user?.address?.[0]?.country || "");
  const [cep, setCep] = useState(user?.address?.[0]?.cep || "");
  const [province, setProvince] = useState(user?.address?.[0]?.province || "");
  const [city, setCity] = useState(user?.address?.[0]?.city || "");
  const [street, setStreet] = useState(user?.address?.[0]?.street || "");

  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const handleUpdateUser = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        const { result, message } = await UupdateUser({
          name,
          telephone,
          birthDate,
          bio,
        });
        if (result === "success") {
          handleUser(name, telephone, birthDate, bio);
          toast.success(message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [name, telephone, birthDate, bio, handleUser],
  );

  const handleSaveAddress = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        if (!user?.address?.length) {
          const { result, data, message } = await createAddress({
            cep,
            city,
            country,
            province,
            street,
          });

          if (result === "success") {
            if (data) {
              handleAddress([
                {
                  id: data.id,
                  userId: data.userId,
                  country: data.country,
                  cep: data.cep,
                  province: data.province,
                  city: data.city,
                  street: data.street,
                },
              ]);

              toast.success(message);
            }
          }
        } else {
          if (user?.id) {
            if (user?.address) {
              const id = user.address[0].id;

              if (id) {
                const { result, message } = await updateAddress({
                  id,
                  cep,
                  city,
                  country,
                  province,
                  street,
                });

                if (result === "success") {
                  handleAddress([
                    {
                      id,
                      userId: user.id,
                      cep,
                      province,
                      country,
                      city,
                      street,
                    },
                  ]);

                  toast.success(message);
                }
              }
            }
          }
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [
      cep,
      city,
      country,
      province,
      street,
      user?.address,
      user?.id,
      handleAddress,
    ],
  );

  const handleUpdatePassword = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        const { result, message } = await UpdatePassword({
          currentPassword,
          newPassword,
        });
        if (result === "success") {
          toast.success(message);
        }

        if (result === "error") {
          toast.error(message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [currentPassword, newPassword],
  );

  const handleGetAddress = useCallback(async () => {
    try {
      const { result, data } = await getAddress({ cep });

      if (result === "success") {
        if (data) {
          if (data.address) {
            const { logradouro, localidade, uf } = data.address;

            if (logradouro) {
              setStreet(logradouro);
            }

            if (localidade) {
              setCity(localidade);
            }

            if (uf) {
              let value = "";

              provinces.forEach((province) => {
                if (uf === province.key) {
                  value = province.value;
                }
              });

              setProvince(value);
            }
          }
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [cep]);

  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Forms>
          {/* Form sobre mim */}
          <Form onSubmit={handleUpdateUser}>
            <h1>Sobre mim</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="birthDate">Data de nascimento</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirtdate(e.target.value)}
                    type="date"
                    required
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="telephone">Telefone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    maxLength={15}
                    value={telephone}
                    onChange={(e) =>
                      setTelephone(maskTelephone(e.target.value))
                    }
                    placeholder="(00) 00000-0000"
                  />
                </InputGroup>
              </Group>
            </Groups>

            <InputGroup>
              <Label htmlFor="bio">Biografia</Label>
              <InputArea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                placeholder="Fale mais sobre você ..."
              />
            </InputGroup>

            <Button>Salvar</Button>
          </Form>

          {/* Form alterar senha */}
          <Form onSubmit={handleUpdatePassword}>
            <h1>Alterar senha</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="currentPassword">Senha atual</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="password"
                    placeholder="Digite senha atual"
                    required
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="newPassword">Nova senha</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    placeholder="Digite a nova senha"
                    required
                  />
                </InputGroup>
              </Group>
            </Groups>

            <Button>Salvar</Button>
          </Form>

          {/* Form endereço */}
          <Form onSubmit={handleSaveAddress}>
            <h1>Endereço</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="country">País</Label>
                  <Input
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Digite o país que você mora"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="province">Estado</Label>
                  <Select
                    id="province"
                    name="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Seu estado"
                    required
                  >
                    {provinces.map(({ key, value }) => (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    ))}
                  </Select>
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="street">Logradouro</Label>
                  <Input
                    id="street"
                    name="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Nome da rua"
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    maxLength={9}
                    value={cep}
                    onChange={(e) => setCep(maskCep(e.target.value))}
                    onBlur={handleGetAddress}
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Digite qual cidade você mora"
                  />
                </InputGroup>
              </Group>
            </Groups>

            <Button>Salvar</Button>
          </Form>
        </Forms>
      </Container>
    </LayoutDefault>
  );
};

export default UpdateProfile;
