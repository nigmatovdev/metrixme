import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const points: { value: DictKey; title: DictKey; desc: DictKey }[] = [
  { value: "prob_b1_g", title: "prob_b1_t", desc: "prob_b1_d" },
  { value: "prob_b2_g", title: "prob_b2_t", desc: "prob_b2_d" },
  { value: "prob_b3_g", title: "prob_b3_t", desc: "prob_b3_d" },
];

// Fake call rows for the "blind" list — every score is an unreadable "??".
const rows: { av: string; nm: string; wave: number[] }[] = [
  { av: "AK", nm: "Akmal · 04:12", wave: [6, 11, 4, 13, 7, 10, 5, 12, 8, 6, 11, 4] },
  { av: "MS", nm: "Madina · 02:58", wave: [10, 5, 12, 7, 13, 6, 9, 4, 11, 8, 5, 10] },
  { av: "JB", nm: "Jasur · 06:41", wave: [4, 9, 6, 11, 5, 13, 8, 6, 12, 7, 10, 5] },
  { av: "DN", nm: "Dilnoza · 03:27", wave: [11, 7, 13, 5, 9, 12, 4, 10, 6, 13, 8, 6] },
];

export function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="wrap problem-grid">
        <Reveal className="problem-copy">
          <span className="eyebrow">
            <span className="dot" style={{ background: "var(--red)" }} />
            <span>
              <T k="prob_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="prob_h2a" />{" "}
            <span className="hl">
              <T k="prob_h2b" />
            </span>
          </h2>
          <p className="lede">
            <T k="prob_lede" />
          </p>
          <ul className="problem-points">
            {points.map((p) => (
              <li key={p.title} className="problem-point">
                <span className="pv mono">
                  <T k={p.value} />
                </span>
                <span className="pt">
                  <b>
                    <T k={p.title} />
                  </b>{" "}
                  — <T k={p.desc} />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="calllist" aria-hidden="true">
          <div className="calllist-head">
            <span className="t">
              <T k="prob_card_title" />
            </span>
            <span className="tag">
              <T k="prob_card_tag" />
            </span>
          </div>
          {rows.map((r) => (
            <div key={r.av} className="callrow">
              <div className="av">{r.av}</div>
              <div className="meta">
                <div className="nm">{r.nm}</div>
                <div className="wave">
                  {r.wave.map((h, i) => (
                    <i key={i} style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
              <div className="score">??</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
