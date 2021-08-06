import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameUpsertOneMutation = mutationField(
  'upsertOneOpportunityStageName',
  {
    type: nonNull('OpportunityStageName'),
    args: {
      where: nonNull('OpportunityStageNameWhereUniqueInput'),
      create: nonNull('OpportunityStageNameCreateInput'),
      update: nonNull('OpportunityStageNameUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityStageName.upsert({
        ...args,
        ...select,
      })
    },
  },
)
