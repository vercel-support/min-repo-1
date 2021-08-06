import { mutationField, nonNull } from 'nexus'

export const ServiceModelUpdateOneMutation = mutationField(
  'updateOneServiceModel',
  {
    type: nonNull('ServiceModel'),
    args: {
      where: nonNull('ServiceModelWhereUniqueInput'),
      data: nonNull('ServiceModelUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.serviceModel.update({
        where,
        data,
        ...select,
      })
    },
  },
)
