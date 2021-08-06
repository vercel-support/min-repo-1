import { mutationField, nonNull } from 'nexus'

export const OpportunityUpsertOneMutation = mutationField(
  'upsertOneOpportunity',
  {
    type: nonNull('Opportunity'),
    args: {
      where: nonNull('OpportunityWhereUniqueInput'),
      create: nonNull('OpportunityCreateInput'),
      update: nonNull('OpportunityUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunity.upsert({
        ...args,
        ...select,
      })
    },
  },
)
