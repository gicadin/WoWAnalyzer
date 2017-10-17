import React from 'react';

import ITEMS from 'common/ITEMS';
import TALENTS_MONK from 'common/talents/TALENTS_MONK';
import Module from 'Parser/Core/Module';

import Combatants from 'Parser/Core/Modules/Combatants';
import AbilityTracker from 'Parser/Core/Modules/AbilityTracker';

class SoulOfTheGrandmaster extends Module {
    static dependencies = {
        abilityTracker: AbilityTracker,
        combatants: Combatants,
    };

    on_initialized() {
        this.active = this.combatants.selected.hasFinger(ITEMS.SOUL_OF_THE_GRANDMASTER.id);
    }

    item() {
        const chiOrbit = this.abilityTracker.getAbility(TALENTS_MONK.CHI_ORBIT_TALENT.id);
        const damage = chiOrbit.damageEffective;

        return {
            item: ITEMS.SOUL_OF_THE_GRANDMASTER,
            result: (
                <span>
                    {this.owner.formatItemDamageDone(damage)}
                </span>
            ),
        };
    }
}

export default SoulOfTheGrandmaster;
