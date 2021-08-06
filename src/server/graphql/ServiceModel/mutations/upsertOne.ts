import { mutationField, nonNull } from 'nexus'

export const ServiceModelUpsertOneMutation = mutationField(
  'upsertOneServiceModel',
  {
    type: nonNull('ServiceModel'),
    args: {
      where: nonNull('ServiceModelWhereUniqueInput'),
      create: nonNull('ServiceModelCreateInput'),
      update: nonNull('ServiceModelUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.serviceModel.upsert({
        ...args,
        ...select,
      })
    },
  },
)
