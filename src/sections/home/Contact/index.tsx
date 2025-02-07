import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";
import ContactInfoItem from "./ContactInfoItem";
import { JSONContactInfoData } from "@/types/json";
import { getJSON } from "@/lib/json";

export default async function HomeContactSection() {
  const ContactInfo = await getJSON<JSONContactInfoData[]>("_contact.json");
  return (
    <section className={s.base}>
      <Typo
        as="h2"
        size={{
          750: 24,
          default: 28,
        }}
        weight={weight.semibold}
        color="#212E38"
      >
        연락하기
      </Typo>
      <div className={s.contactList}>
        {Object.entries(ContactInfo).map(([key, value]) => (
          <ContactInfoItem key={key} {...value} />
        ))}
      </div>
    </section>
  );
}
