import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeUpsertOneMutation = mutationField(
  'upsertOneOpportunityRecordType',
  {
    type: nonNull('OpportunityRecordType'),
    args: {
      where: nonNull('OpportunityRecordTypeWhereUniqueInput'),
      create: nonNull('OpportunityRecordTypeCreateInput'),
      update: nonNull('OpportunityRecordTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityRecordType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
