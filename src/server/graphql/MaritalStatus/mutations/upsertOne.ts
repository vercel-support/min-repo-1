import { mutationField, nonNull } from 'nexus'

export const MaritalStatusUpsertOneMutation = mutationField(
  'upsertOneMaritalStatus',
  {
    type: nonNull('MaritalStatus'),
    args: {
      where: nonNull('MaritalStatusWhereUniqueInput'),
      create: nonNull('MaritalStatusCreateInput'),
      update: nonNull('MaritalStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.maritalStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
