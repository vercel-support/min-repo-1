import { mutationField, nonNull } from 'nexus'

export const OpportunityCreateOneMutation = mutationField(
  'createOneOpportunity',
  {
    type: nonNull('Opportunity'),
    args: {
      data: nonNull('OpportunityCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.opportunity.create({
        data,
        ...select,
      })
    },
  },
)
