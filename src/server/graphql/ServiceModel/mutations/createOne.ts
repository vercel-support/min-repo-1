import { mutationField, nonNull } from 'nexus'

export const ServiceModelCreateOneMutation = mutationField(
  'createOneServiceModel',
  {
    type: nonNull('ServiceModel'),
    args: {
      data: nonNull('ServiceModelCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.serviceModel.create({
        data,
        ...select,
      })
    },
  },
)
