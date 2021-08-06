import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameCreateOneMutation = mutationField(
  'createOneOpportunityStageName',
  {
    type: nonNull('OpportunityStageName'),
    args: {
      data: nonNull('OpportunityStageNameCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.opportunityStageName.create({
        data,
        ...select,
      })
    },
  },
)
