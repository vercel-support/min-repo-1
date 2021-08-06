import { mutationField, nonNull } from 'nexus'

export const ServiceTypeUpsertOneMutation = mutationField(
  'upsertOneServiceType',
  {
    type: nonNull('ServiceType'),
    args: {
      where: nonNull('ServiceTypeWhereUniqueInput'),
      create: nonNull('ServiceTypeCreateInput'),
      update: nonNull('ServiceTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.serviceType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
