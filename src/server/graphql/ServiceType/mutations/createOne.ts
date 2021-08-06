import { mutationField, nonNull } from 'nexus'

export const ServiceTypeCreateOneMutation = mutationField(
  'createOneServiceType',
  {
    type: nonNull('ServiceType'),
    args: {
      data: nonNull('ServiceTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.serviceType.create({
        data,
        ...select,
      })
    },
  },
)
