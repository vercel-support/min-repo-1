import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeUpsertOneMutation = mutationField(
  'upsertOneOpportunityType',
  {
    type: nonNull('OpportunityType'),
    args: {
      where: nonNull('OpportunityTypeWhereUniqueInput'),
      create: nonNull('OpportunityTypeCreateInput'),
      update: nonNull('OpportunityTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
