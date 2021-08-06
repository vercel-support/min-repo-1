import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameUpdateOneMutation = mutationField(
  'updateOneOpportunityStageName',
  {
    type: nonNull('OpportunityStageName'),
    args: {
      where: nonNull('OpportunityStageNameWhereUniqueInput'),
      data: nonNull('OpportunityStageNameUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.opportunityStageName.update({
        where,
        data,
        ...select,
      })
    },
  },
)
