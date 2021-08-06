import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeCreateOneMutation = mutationField(
  'createOneOpportunityType',
  {
    type: nonNull('OpportunityType'),
    args: {
      data: nonNull('OpportunityTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.opportunityType.create({
        data,
        ...select,
      })
    },
  },
)
