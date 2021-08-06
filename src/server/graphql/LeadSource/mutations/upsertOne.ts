import { mutationField, nonNull } from 'nexus'

export const LeadSourceUpsertOneMutation = mutationField(
  'upsertOneLeadSource',
  {
    type: nonNull('LeadSource'),
    args: {
      where: nonNull('LeadSourceWhereUniqueInput'),
      create: nonNull('LeadSourceCreateInput'),
      update: nonNull('LeadSourceUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.leadSource.upsert({
        ...args,
        ...select,
      })
    },
  },
)
