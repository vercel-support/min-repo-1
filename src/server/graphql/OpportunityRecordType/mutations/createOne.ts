import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeCreateOneMutation = mutationField(
  'createOneOpportunityRecordType',
  {
    type: nonNull('OpportunityRecordType'),
    args: {
      data: nonNull('OpportunityRecordTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.opportunityRecordType.create({
        data,
        ...select,
      })
    },
  },
)
